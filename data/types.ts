/**
 * Profile social network type definition
 */
export type SocialNetwork = {
    name: string,
    url: string,
}

/**
 * Profile type definition
 */
export type Profile = {
    avatar: string,
    firstname: string,
    lastname: string,
    city: string,
    country: string,
    description: string,
    socialNetworks: SocialNetwork[],
}