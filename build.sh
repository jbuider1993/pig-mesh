#!/bin/bash

commit_log=`date`

if [ ! -n $1 ];then
  commit_log=$1
fi

git add .
git commit -m "$commit_log"
git push origin docs
echo "部署成功"
