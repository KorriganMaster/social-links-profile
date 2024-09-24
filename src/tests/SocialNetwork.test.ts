import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import SocialNetwork from "@components/SocialNetwork.astro";

const container = await AstroContainer.create();

test('Empty social network', async () => {
    const result = container.renderToResponse(SocialNetwork, {});
    await expect(() => result).rejects.toThrowError();
});

test('Display social network', async () => {
    const result = await container.renderToString(SocialNetwork, {
        props: {
            socialNetwork: {
                url: 'http://test-url',
                name: 'Test social network',
            },
        },
    });

    expect(result).toMatch(/\<a.*href="http:\/\/test-url".*\> ?Test social network ?\<\/a\>/);
});