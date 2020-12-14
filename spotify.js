export const authEndpoint = 'https://accounts.spotify.com/authorize';

const setRedirectUri = 'https://spotify-d2426.web.app/';

const clientId = '97de30dac43541e79c57249d25c00125';

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${setRedirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;