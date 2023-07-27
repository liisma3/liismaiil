#!/bin/bash

src_dir="/home/ismaiil/lami1a_liismaiil/"
dest_dir="/media/ismaiil/13b06d7f-6518-4a44-aef8-e66b0176b60f/"

#create archive name
day=$(date +%A)
host=$(hostname -s)
archive="$host-$day.txz"
echo
echo "dd from   $dest_dir ..." 
#listing backup content
ls -lh $dest_dir
tar -tvf $dest_dir/$archive
 
dd if=$src_dir bs=4M conv=noerror,sync | gzip -c > $dest_dir/"home-backup_$(date +%Y.%m.%d.%H).tgz"