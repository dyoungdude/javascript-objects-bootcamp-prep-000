var playlist = {Slowdive: 'Alison', My Bloody Valentine: 'Sometimes'};

function updatePlaylist(object, artistName, songTitle){
  playlist['Phil Ochs'] = "Here's to the State of Mississipi";
  return playlist;
}

function removeFromPlaylist(object, artistName){
  delete playlist.Slowdive;
  return playlist;
}
