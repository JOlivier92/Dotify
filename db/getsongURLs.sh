#!/usr/bin/env bash

# This command will download all images into a temp folder
# in your home folder.
# Useful for someone who wants to clone this repo and wants
# to replicate the seed data used.

cat ../songSeeds.csv | cut -d , -f 6 > songURLs.txt
sed -n -e '/^https\:\/\//p' songURLs.txt > cleanedSongURLs.txt
for link in `cat cleanedSongURLs.txt | cut -d, -f1`; do
  wget $link;
done
echo "all done!"
