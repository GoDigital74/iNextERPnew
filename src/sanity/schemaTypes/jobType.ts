import { defineField, defineType } from 'sanity'

export const jobType = defineType({
  name: 'job',
  title: 'Job Posting',
  type: 'document',
 
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., Noida, Remote, Hybrid',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      description: 'e.g., Full-time, Contract',
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      description: 'e.g., Support, Development, Data',
    }),
    defineField({
      name: 'postedAt',
      title: 'Posted Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Job Description & Requirements',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'department',
    },
  },
})

