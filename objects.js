var playlist = {Slowdive: 'Alison', My Bloody Valentine: 'Sometimes'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Phil Ochs'] = "Here's to the State of Mississipi";
  console.log(playlist);
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
  console.log(playlist);
  return playlist;
}
