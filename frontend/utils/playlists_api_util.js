export const fetchPlaylists = () => (
    $.ajax({
    url: 'api/playlists',
    method: 'GET',
  })
);

export const fetchPlaylist = id => {
  debugger
  return (
    $.ajax({
    url: `api/playlists/${id}`,
    method: 'GET',
  })
)};

export const createPlaylist = playlist => (
    $.ajax({
    url: 'api/playlists',
    method: 'POST',
    data: { playlist }
  })
);
