<template>
  <q-page v-if="match">
    <div class="tw-container tw-mx-auto">
      <div class="tw-p-5">
        <h2 class="text-primary tw-text-2xl tw-font-bold tw-mb-4">
          Solicitar entradas
        </h2>
        <MatchCard
            :match="match"
        />
        <hr class="tw-my-6">
        <q-form
            greedy
            @submit="onSubmit"
        >
          <h2 class="text-primary tw-text-xl tw-w-full tw-mb-4">
            Socio
          </h2>
          <q-card>
            <q-card-section>
              <q-toggle
                  v-model="memberTicketEnabled"
                  label="Quiero entrada para socio"
              />
              <template v-if="memberTicketEnabled">
                <MatchRequestPersonForm
                    v-model:first-name="memberData.firstName"
                    v-model:last-name="memberData.lastName"
                    v-model:person-id="memberData.personId"
                    v-model:phone-number="memberData.phoneNumber"
                    v-model:birthdate="memberData.birthdate"
                />
              </template>
            </q-card-section>
          </q-card>
          <hr class="tw-my-6">
          <h2 class="text-primary tw-text-xl tw-w-full tw-mb-4">
            No Socio
          </h2>
          <p v-if="!extraRequests.length">
            No has añadido ninguno
          </p>
          <div
              v-for="(nonMember, idx) in extraRequests"
              :key="`nonMember-${idx}`"
              class="tw-flex tw-flex-row tw-items-center"
          >
            <q-btn
                class="tw-hidden lg:tw-block tw-text-xs tw-mr-4"
                flat
                color="grey"
                :icon="fasTrash"
                @click="removeRequest(idx)"
            />
            <q-card
                class="tw-w-full"
                :class="{'tw-mt-4': idx > 0}"
            >
              <q-card-section>
                <MatchRequestPersonForm
                    v-model:first-name="nonMember.firstName"
                    v-model:last-name="nonMember.lastName"
                    v-model:person-id="nonMember.personId"
                    v-model:phone-number="nonMember.phoneNumber"
                    v-model:birthdate="nonMember.birthdate"
                />
                <q-btn
                    class="lg:tw-hidden tw-mt-6 tw-p-0"
                    color="negative"
                    flat
                    label="Eliminar"
                    @click="removeRequest(idx)"
                />
              </q-card-section>
            </q-card>
          </div>
          <q-btn
              class="tw-w-full md:tw-w-auto tw-mt-5"
              color="accent"
              :icon="fasPlus"
              label="Añadir no socio"
              size="md"
              @click="addRequest"
          />
          <hr class="tw-my-6">
          <h2 class="text-primary tw-text-xl tw-w-full tw-mb-4">
            Resumen
          </h2>
          <q-card class="md: tw-w-[30rem]">
            <q-card-section horizontal>
              <q-card-section class="tw-w-1/2">
                <ul class="tw-list-disc">
                  <li
                      v-if="memberTicketEnabled"
                      class="tw-ml-5"
                  >
                    1 entrada para socio
                  </li>
                  <li
                      v-if="extraRequests.length"
                      class="tw-ml-5"
                  >
                    {{ extraRequests.length }} {{ pluralize('entrada', extraRequests.length) }} para no socios
                  </li>
                </ul>
              </q-card-section>
              <q-separator
                  vertical
              />
              <q-card-section class="tw-w-1/2 tw-text-center">
                <p class="text-primary tw-text-5xl">
                  {{ amountDue }} €
                </p>
                <p class="tw-mt-5">
                  Bizum al número: 655555555.
                </p>
              </q-card-section>
            </q-card-section>
          </q-card>
          <q-toggle
              v-model="acknowledge"
              class="lg:tw-w-[50rem] tw-mt-7"
              label="Confirmo que he hecho el bizum antes de solicitar estas entradas. Entiendo que la Peña se reserva el derecho a cancelar mi solicitud en caso de no haberlo relizado."
          />
          <p>
            <q-btn
                class="tw-mt-7"
                color="primary"
                :disable="!isSendEndabled"
                label="Enviar solicitud"
                type="submit"
            />
          </p>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {
  Ref, computed, reactive, ref, watch, onBeforeMount,
} from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

import { fasPlus, fasTrash } from '@quasar/extras/fontawesome-v6';

import MatchCard from 'src/components/dashboard/matches/MatchCard.vue';
import { useMatchStore } from 'src/stores/store-match';
import { Match, MatchRequest, MatchRequestPerson } from 'src/types/match';
import MatchRequestPersonForm from 'src/components/dashboard/matches/MatchRequestPersonForm.vue';
import { useUserStore } from 'src/stores/store-user';
import { pluralize } from 'src/utils/text';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const route = useRoute();
const router = useRouter();

const matchStore = useMatchStore();
const userStore = useUserStore();

// Data
const acknowledge: Ref<boolean> = ref(false);
const match: Ref<Match | undefined> = ref();
const memberTicketEnabled: Ref<boolean> = ref(false);

const memberData: MatchRequestPerson = reactive(
  {
    firstName: userStore.user.firstName || '',
    lastName: userStore.user.lastName || '',
    personId: '',
    birthdate: userStore.user.birthdate || '',
    phoneNumber: userStore.user.phoneNumber || '',
  },
);
const extraRequests: MatchRequestPerson[] = reactive([]);

// Computed
const amountDue = computed((): number => {
  if (!match.value) return 0;

  return (
    ((match.value.cost || 0) * ((memberTicketEnabled.value) ? 1 : 0))
    + ((match.value.nonMemberCost || 0) * extraRequests.length)
  );
});
const isSendEndabled = computed((): boolean => (memberTicketEnabled.value || extraRequests.length > 0) && acknowledge.value);

// Methods
const addRequest = () => {
  extraRequests.push(
    {
      firstName: '',
      lastName: '',
      personId: '',
      birthdate: '',
      phoneNumber: '',
    },
  );
};

const initialFetchMatch = (matchId: string) => {
  match.value = matchStore.getMatchById(matchId);
  if (!match.value) {
    router.replace('/404');
  }
};

const removeRequest = (index: number) => {
  extraRequests.splice(index, 1);
};

const onSubmit = async () => {
  const requests = extraRequests.map(
    (matchRequestPerson) => ({
      ...matchRequestPerson,
      author: userStore.user.id,
      matchId: match.value!.id,
      isMember: false,
    }),
  );

  if (memberTicketEnabled.value) {
    requests.push({
      ...memberData,
      author: userStore.user.id,
      matchId: match.value!.id,
      isMember: true,
    });
  }
  await matchStore.saveMatchRequests(requests);
  $q.notify({
    message: 'Su solicitud se ha enviado con éxito',
    type: 'positive',
  });
  router.push({ name: 'dashboard:home' });
};

onBeforeRouteUpdate((from, to) => {
  initialFetchMatch(to.params.id as string);
});

onBeforeMount(() => {
  initialFetchMatch(route.params.id as string);

  matchStore.getMatchRequestsByMatchAndUser(match.value!.id, userStore.user.id).forEach(
    ({
      firstName, lastName, birthdate, personId, phoneNumber, isMember,
    }: MatchRequest) => {
      const person = {
        firstName,
        lastName,
        birthdate,
        personId,
        phoneNumber,
      };

      if (isMember) {
        memberTicketEnabled.value = true;
        Object.assign(memberData, person);
      } else {
        extraRequests.push(person);
      }
    },
  );
});
</script>
