#!/bin/bash
# clean dependencies for nodejs project

echo -e "\ncleaning dependencies..."

rm -rf build

rm -rf node_modules
rm package-lock.json

echo -e "\ncleaning dependencies COMPLETE"
echo -e "\n⚠️  Remember to exit container & try again (to reinstall dependencies) ⚠️\n"
