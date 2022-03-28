cd frontend
npm run build
cd ../backend
npm run build
echo '{"users":[{"email":"","name":"TestUser","socialSecurityNumber":0,"id":396814177519}],"companies":[{"country":"","name":"TestCompany","email":"","owners":[],"id":429493321141}]}' > ./dist/repos/database.json