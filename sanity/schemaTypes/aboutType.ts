import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: '名前（日本語）',
      type: 'string',
    }),
    defineField({
      name: 'nameRomaji',
      title: '名前（ローマ字）',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'プロフィール画像',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt テキスト',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'profileText1',
      title: 'プロフィール文（1段落目）',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'profileText2',
      title: 'プロフィール文（2段落目）',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'missionTitle',
      title: 'ミッションタイトル',
      type: 'string',
    }),
    defineField({
      name: 'missionText1',
      title: 'ミッション文（1段落目）',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'missionText2',
      title: 'ミッション文（2段落目）',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'profileImage',
    },
  },
})
