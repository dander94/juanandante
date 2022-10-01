until cd /${PROJECT_NAME}/${PROJECT_NAME}/
do
    echo "Waiting for server volume..."
done

until python manage.py migrate
do
    echo "Waiting for db..."
done

echo "Create Folders..."
mkdir -p static
mkdir -p media
mkdir -p static_root
mkdir -p media_root

echo "Collect static"
python manage.py collectstatic --noinput

echo "Start Gunircorn"
gunicorn ${PROJECT_NAME}.wsgi --bind 0.0.0.0:${BACKEND_PORT} --workers 4 --threads 4
