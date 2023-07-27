#!/bin/bash


#Source directory
src_dir="/home/ismaiil/lami1a_liismaiil"

#Directory destination
dest_dir="/media/ismaiil/13b06d7f-6518-4a44-aef8-e66b0176b60f"

#create archive name
day=$(date +%A)
host=$(hostname -s)
archive="$host-$day.tgz"
echo
echo "Backing up $src_dir to $dest_dir ..." 

#backing up data effectively
tar -cvzf data.snap -f $dest_dir/$archive $src_dir
#tar -Jcf $dest_dir/$archive $src_dir
#output end message 
echo
echo "backup endend $?"
echo

#listing backup content
ls -lh $dest_dir
tar -tvf $dest_dir/$archive

#END
#COPY dd 
# dd if=$dest_dir/$archive bs=4M conv=noerror,sync   |  gzip -c > $dest_dir/"home-backup_$(date +%Y.%m.%d.%H)"