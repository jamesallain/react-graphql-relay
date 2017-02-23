#! /usr/bin/env sh

usage()
{
  echo ""
  echo "./docker.sh"
  echo "build			'build docker images'"
  echo "push			'pushes existing docker images to registry'"
	echo "all			'build and push docker images to registry'"
	echo ""
}

build()
{
  API="API_PUBLIC_URL" npm run build
	docker build -t rec/webserver .
}

tag()
{
	docker tag rec/webserver docker.giconsulting.com:5000/rec/webserver
}


push()
{
	docker push docker.giconsulting.com:5000/rec/webserver
}



COMMAND="$1"
case $COMMAND in
	build)
		build
		exit
		;;
	tag)
		tag
		exit
		;;
	push)
		tag
		push
		exit
		;;
	all)
		build
		tag
		push
		exit
		;;
	*)
		echo "ERROR: invalid argument: \"$COMMAND\""
		usage
		exit 1
		;;
esac


