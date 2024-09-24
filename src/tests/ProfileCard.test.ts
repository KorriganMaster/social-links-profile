import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
import ProfileCard from "@components/ProfileCard.astro";
import type { Profile } from "@data/types";

const container = await AstroContainer.create();

describe('Errors tests', () => {
    test('No profile prop', async () => {
        const result = container.renderToResponse(ProfileCard);
        
        expect(() => result).rejects.toThrowError('Cannot read properties of undefined (reading \'avatar\')');
    });
    
    test('Invalid profile\'s avatar', async () => {
        const result = container.renderToResponse(ProfileCard, {
            props: {
                profile: {
                    avatar: '',
                    firstname: 'Test',
                    lastname: 'User',
                    city: 'Test city',
                    country: 'Test country',
                    description: 'Test user description',
                    socialNetworks: [],
                },
            },
        });

        expect(() => result).rejects.toThrowError(/Expected `src` property for `getImage` or `<Image \/\>`.*/);
    });
});

test('Display profile', async () => {
    const profile: Profile = {
        avatar: '/avatar.png',
        firstname: 'Test',
        lastname: 'User',
        city: 'Test city',
        country: 'Test country',
        description: 'Test user description',
        socialNetworks: [
            {
                url: 'http://my-first-url',
                name: 'My first social network',
            }, {
                url: 'http://my-second-url',
                name: 'My second social network',
            },
        ],
    };

    const result = await container.renderToString(ProfileCard, {
        props: {
            profile: profile,
        },
    });

    expect(result).toMatch(/\<h1.*\>Test User\<\/h1\>/);
    expect(result).toMatch(/\<span.*\>Test city, Test country\<\/span\>/);
    expect(result).toMatch(/\<span.*\>Test user description\<\/span\>/);
    
    profile.socialNetworks.forEach((socialNetwork) => {
        expect(result).toContain(socialNetwork.url);
        expect(result).toContain(socialNetwork.name);
    });
});