# below is the information used to grab faces for artists.
# consistent artist picture data was not generated from the seeds
# obtained so I went and downloaded 200 faces from randomuser.me

# URLs were scraped by performing the following:
#
# let arr = [];
# let menPrefix = "https://randomuser.me/api/portraits/men/";
# let womenPrefix = "https://randomuser.me/api/portraits/women/"
# let suffix = ".jpg";
# require 'csv'
# 100.times do |i|
#     arr.push(menPrefix+i.to_s+suffix)
#     arr.push(womenPrefix+i.to_s+suffix)
# end
# CSV.open("urls.csv", "w") do |csv|
#    200.times do |i|
#        csv << [arr[i]]
##############################################################

# I then split the men and women into two separate files since they (menURLs.csv / womenURLs.csv)
# saved as the same filenames (1,2,3... 99.png)
# Then, once I separated the files, I ran the following bash script:

wget -i menURLs.csv
wget -i womenURLs.csv

# the following was performed to give them distinct file names when pushing
# to AWS

# for men
for f in * ; do mv -- "$f" "M$f" ; done
# for women
for f in * ; do mv -- "$f" "W$f" ; done