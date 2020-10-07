import axios from 'axios'

const client_id = '371247898053-visifa9rl1n2ni6n0pkhol05vl27o82u.apps.googleusercontent.com'
const enterprise_id = 'LC03qonbzr'
const base_url = 'https://androidmanagement.googleapis.com/v1'
const policy_name = 'policy1'

export function oauthSignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);
    form.setAttribute('target', '구글 로그인')

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': client_id,
                    'redirect_uri': window.location.href.replace('#/android', ''),
                    'response_type': 'token',
                    'scope': 'https://www.googleapis.com/auth/androidmanagement',
                    'include_granted_scopes': 'true'};

    // Add form parameters as hidden input values.
    for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
}

function authAPI(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

}

function runAuthAPI(token, method, url, data) {
    authAPI(token)
    return axios({
        method,
        url,
        data
    })
}

export function enroll(token) {
    return runAuthAPI(token, 'post', `${base_url}/enterprises/${enterprise_id}/enrollmentTokens`)
}

export function getList(token) {
    return runAuthAPI(token, 'get', `${base_url}/enterprises/${enterprise_id}/devices`)
}

export function lock(token, device_name) {
    return runAuthAPI(token, 'post', `${base_url}/${device_name}:issueCommand`, {
        "type": "LOCK"
    })
}

export function reboot(token, device_name) {
    return runAuthAPI(token, 'post', `${base_url}/${device_name}:issueCommand`, {
        "type": "REBOOT"
    })
}

export function runPolicy(token, policy_json) {
    return runAuthAPI(token, 'patch', `${base_url}/enterprises/${enterprise_id}/policies/${policy_name}`, JSON.parse(policy_json))
}