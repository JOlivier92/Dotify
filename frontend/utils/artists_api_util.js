export const fetchArtists = () => (
    $.ajax({
    url: 'api/artists',
    method: 'GET',
  })
);

export const fetchArtist = id => {
  return ($.ajax({
    url: `api/artists/${id}`,
    method: 'GET',
  }))
};
