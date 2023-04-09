export const serverUrl = 'http://localhost:5000';

export const getProfileDetail = async (user_id) => {
    let result = await fetch(`${serverUrl}/user/getUserDetail?user_id=${user_id}`)
    return result.json();
}

export const updateAboutMe = async (user_id, token, about_me) => {
    let result = await fetch(`${serverUrl}/user/updateAboutMe`, {
        method: 'PUT',
        body: JSON.stringify({
            user_id: user_id,
            about_me: about_me,
        }),
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });
    return result.json();
}


export const updateOnTheWeb = async (user_id, token, linkedIn, github, facebook, twitter, instagram, website) => {
    let result = await fetch(`${serverUrl}/user/updateOnTheWeb`, {
        method: 'PUT',
        body: JSON.stringify({
            user_id: user_id,
            linkedIn: linkedIn,
            github: facebook,
            twitter: twitter,
            instagram: instagram,
            website: website
        }),
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });
    return result.json();
}

export const updateProfessionalInfo = async (user_id, token, highest_education, currently_doing ) => {
    let result = await fetch(`${serverUrl}/user/updateProfessionalInfo`, {
        method: 'PUT',
        body: JSON.stringify({
            user_id: user_id,
            highest_education: highest_education,
            currently_doing: currently_doing
        }),
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });
    return result.json();
}


export const updatePassword = async (email, token,  password, new_password, confirm_password) => {
    let result = await fetch(`${serverUrl}/user/updatePassword`, {
        method: 'PUT',
        body: JSON.stringify({
            email: email,
            password: password,
            new_password: new_password,
            confirm_password: confirm_password
        }),
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });
    return result.json();
}

export const updateProfile = async (user_id, token,  profile_img, first_name, last_name, phone_num) => {
    let result = await fetch(`${serverUrl}/user/updateProfile`, {
        method: 'PUT',
        body: JSON.stringify({
            user_id: user_id,
            profile_img: profile_img,
            first_name: first_name,
            last_name: last_name,
            phone_num: phone_num
        }),
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    });
    return result.json();
}