import { generateUniqueId } from '../../utility/identifier/id-utility'

export const mapProfileToData = (profile) => {
    return {
        id: profile?.id,
        profileUrl: profile?.url,
        profileTitle: profile?.title,
        profileIcon: profile?.icon,
        profileIconColor: profile?.iconColor
    }
}

export const mapValuesToProfile = (data) => {
    const id = data.id || generateUniqueId()
    return { id: id, url: data.profileUrl, title: data.profileTitle, icon: data.profileIcon, iconColor: data.profileIconColor }
}

export const resetProfileData = () => {
    return {
        id: '',
        profileUrl: '',
        profileTitle: '',
        profileIcon: '',
        profileColor: ''
    }
}

