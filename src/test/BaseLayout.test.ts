import BaseLayout from '@layouts/BaseLayout.astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';

test('Slot render', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(BaseLayout, {
        slots: {
            default: 'Hello, world!',
        },
    });

    expect(result).toContain('Hello, world!');
});