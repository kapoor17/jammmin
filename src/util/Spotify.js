let USER_ACCESS_TOKEN;
const CLIENT_ID = '6772d444cfcd4b1a9920233e10ddd000';
const REDIRECT_URL = 'http://localhost:3000/';


export const Spotify = {
    getAccessToken(){
        if(USER_ACCESS_TOKEN) return USER_ACCESS_TOKEN

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expirationTimeMatch = window.location.href.match(/expires_in=([^&]*)/)

        if(accessTokenMatch && expirationTimeMatch){
            USER_ACCESS_TOKEN = accessTokenMatch[1];
            const expirationTime = expirationTimeMatch[1];
            window.setTimeout(()=>{
                USER_ACCESS_TOKEN="";
                return
            },expirationTime*1000);
            window.history.pushState('Access Token', null, '/');
            return USER_ACCESS_TOKEN;
        }else{
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URL}`
            window.location = accessUrl;
        }
    },

    search(TERM){
        const USER_ACCESS_TOKEN = Spotify.getAccessToken();

        return fetch(`https://api.spotify.com/v1/search?type=track&q=${TERM}`,{
            headers : {
                Authorization : `Bearer ${USER_ACCESS_TOKEN}`
            }
        }).then(res => res.json())
        .then(res => {
            const searchRes = []

            if(!res.tracks){
                return res;
            } 

            res.tracks.items.map(track => {
                searchRes.push({
                    id : track.id,
                    name : track.name,
                    artist : track.artists[0].name,
                    album : track.album.name,
                    uri : track.uri
                })
            })
            return searchRes
        })
    },

    savePlaylist(PLAYLIST_NAME, PLAYLIST_TRACKS){
        if(!(PLAYLIST_NAME && PLAYLIST_TRACKS)) return;

        const USER_ACCESS_TOKEN = Spotify.getAccessToken();
        const headers = {Authorization : `Bearer ${USER_ACCESS_TOKEN}`}
        let userID ;

        fetch(`https://api.spotify.com/v1/me`,{headers : headers})
            .then(res => res.json())
            .then(res => {
                userID = res.id
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,{
                    headers : headers,
                    method : `POST`,
                    body : JSON.stringify({
                        name : PLAYLIST_NAME,
                        description : "A Jammmin made playlist!"
                    })
                }).then(res => res.json())
                .then(res => {
                    let playlistID = res.id;
                    return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`,{
                        headers : headers,
                        method : `POST`,
                        body : JSON.stringify({
                            uris : PLAYLIST_TRACKS
                        })
                    })
                })
            })
    }

}