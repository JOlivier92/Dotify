export const fetchSongs = () => (
    $.ajax({
    url: 'api/songs',
    method: 'GET',
  })
);

export const fetchSongsByName = (query) => {
 return (
  $.ajax({
    url: 'api/songs',
    method: 'POST',
    data: { query }
  })
)};
export const fetchSong = id => (
    $.ajax({
    url: `api/songs/${id}`,
    method: 'GET',
  })
);
