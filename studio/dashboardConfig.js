export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a2c503c024d3106cea1642',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-iob2dogw',
                  apiId: 'f8f7b6de-c4a7-4c13-9e03-d52bfea03ea1'
                },
                {
                  buildHookId: '60a2c5036ea5e3109da9ad3e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8pvyrnk2',
                  apiId: '130f49d6-554d-4e22-9cb0-7ba5f8124638'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Molnfront/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8pvyrnk2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
