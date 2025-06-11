#!/bin/sh

echo "Aguardando o banco de dados iniciar..."

while ! nc -z db 3306; do
  sleep 1
done

echo "Banco de dados está pronto!"

npx prisma generate

npm run build

npm run start
