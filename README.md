![splash page](https://github.com/jolivier92/dotify/blob/master/app/assets/images/splashpage.png)
# Dotify
---

[Visit Dotify Now](https://dotifyio.herokuapp.com)

Dotify is a faithful clone of the [Spotify](https://open.spotify.com/browse/featured) Web App with 1000s of songs and over 800 artists and albums obtained from a [machine learning dataset](https://arxiv.org/abs/1612.01840) using music from [The Free Music Archive](https://freemusicarchive.org).
 
----

## Technologies

This project used React.js / Redux.js were used to create a single-page application with dynamic updating. Ruby on Rails was used for the backend with objects stored using a PostgreSQL database. Rails ActiveStorage was used to access images and music files located in Amazon S3 buckets. 

---

## Features

- Users can browse a collection of artists, albums, songs, and playlists
- Users can search for songs within the database
- Users can create playlists
- Users can play music continuously
- Media queries for viewing on dynamic viewports
- 404 page
- Google Captcha on signup

---

### User Homepage

A central homepage displays content for users once they log in. They are free to browse through a catered home section or through their library of saved items. Playlists, as well as their songs and art, were randomly generated from seeded users. 

![homepage](https://github.com/jolivier92/dotify/blob/master/app/assets/images/userpage.png)

### Continuous Play

The music player was organized to be a higher-order react component. While browsing occurs from one page to the next, the music player does not re-render to allow for continous play. This was achieved by having a separate slice of state for the music player which was only changed when specific actions (such as clicking on an album or song in an album) occured.

![now playing](https://github.com/jolivier92/dotify/blob/master/app/assets/images/continuous_play.png)

### Google Captcha on Signup

A google captcha was used on the signup page to hinder the use of robot users. Google's recaptcha API is hit whenever a user tries to sign up with this service.
```javascript
<script src='https://www.google.com/recaptcha/api.js?render=explicit' async defer></script>
<Recaptcha
           render="explicit"
           sitekey={captchaKey}
           onloadCallback={this.recaptchaLoaded}
           />
```

![Signup captcha](https://github.com/jolivier92/dotify/blob/master/app/assets/images/signup.png)

### Search

A search function was created which allowed users to search for songs within the database. The search function provided real-time updates when a user tries querying the database.

### 404 page

A 404 page was created to redirect users if they try to access a URL which is not part of the site. This page uses an SVG in combination with webframes to display a spinning vector which mimics Spotify's real 404 page.
![404 captcha](https://github.com/jolivier92/dotify/blob/master/app/assets/images/404.png)


### Seeds

An extensive seed file was used to automate the creation of users, playlists, artists, songs, and albums.
For user images, random faces were scraped from [randomuser.me](https://randomuser.me) by generating a CSV file using ruby
```ruby 
arr = [];
menPrefix = "https://randomuser.me/api/portraits/men/";
womenPrefix = "https://randomuser.me/api/portraits/women/"
suffix = ".jpg";
require 'csv'
100.times do |i|
    arr.push(menPrefix+i.to_s+suffix)
    arr.push(womenPrefix+i.to_s+suffix)
end
CSV.open("urls.csv", "w") do |csv|
   200.times do |i|
       csv << [arr[i]]
```
then by downloading each of the associated images and placing them in AWS S3 buckets using a shell script.
```shell
wget -i menURLs.csv
wget -i womenURLs.csv
for f in * ; do mv -- "$f" "M$f" ; done
for f in * ; do mv -- "$f" "W$f" ; done
```
Furthermore, the dataset was autonomously cleansed to rid any entries without proper URL entries for their mp3 files. Manual cleansing was performed to remove some songs based on their genre or title.
```ruby
cat ../songSeeds.csv | cut -d , -f 6 > songURLs.txt
sed -n -e '/^https\:\/\//p' songURLs.txt > cleanedSongURLs.txt
for link in `cat cleanedSongURLs.txt | cut -d, -f1`; do
  wget $link;
done
```

---

## Future Directions

New functionality will be added in the future, including but not limited to --
- A popularity meter that is based on how often a song is listened to
- The ability to filter songs by genre
- Randomized playlist based off of the popularity of songs

