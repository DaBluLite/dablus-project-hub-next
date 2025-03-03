'use server'
import { auth } from '@/auth'
import { AttachmentBuilder, userMention, WebhookClient } from 'discord.js';
import { redirect } from 'next/navigation'

export async function submitColorway(formData: FormData) {
    const session = await auth();

    if (session) {
        const wc = new WebhookClient({ id: process.env.WH_ID, token: process.env.WH_TOKEN });

        const colorwayName = formData.get('name');
        const accent = formData.get('accent');
        const primary = formData.get('primary');
        const secondary = formData.get('secondary');
        const tertiary = formData.get('tertiary');

        function hexToRgb(hex: string) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return [
                parseInt(result![1], 16),
                parseInt(result![2], 16),
                parseInt(result![3], 16)
            ];
        }


        wc.send({
            content: userMention(session!.user.image?.split("/")[4]!),
            embeds: [
                {
                    color: (hexToRgb(accent as string)[0] << 16) + (hexToRgb(accent as string)[1] << 8) + hexToRgb(accent as string)[2],
                    title: `Colorway Submission from ${session!.user!.name
                        }`,
                    description: `
    Colorway Name: ${colorwayName}
    Accent: ${accent}
    Primary: ${primary}
    Secondary: ${secondary}
    Tertiary: ${tertiary}
  `,
                }
            ]
        })
    }

    redirect(`/`);
}

export async function submitSource(formData: FormData) {
    const session = await auth();

    if (session) {
        const wc = new WebhookClient({ id: process.env.WH_ID, token: process.env.WH_TOKEN });

        const name = formData.get('name');
        const sourceFilename = `${(name as string).replaceAll(" ", "-").toLowerCase()
            }.colorways.json`;

        const fileStream = formData.get('source');

        const file = new AttachmentBuilder(fileStream?.stream(), { name: sourceFilename });

        const colorways = JSON.parse(await fileStream?.text()).colorways.length;

        wc.send({
            content: userMention(session!.user.image?.split("/")[4]!),
            embeds: [
                {
                    title: `Colorway Submission from ${session!.user!.name
                        }`,
                    description: `
        Name: ${name}
        Colorways: ${colorways || 0
                        }`
                }
            ],
            files: [file]
        })
    }

    redirect(`/`);
}