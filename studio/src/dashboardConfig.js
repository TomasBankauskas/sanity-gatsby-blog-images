export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '602d099660b3e3d8271de6bd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-images-studio',
                  apiId: 'a7ce5c07-5f8a-473b-bf37-3eef9fd04977'
                },
                {
                  buildHookId: '602d09966a016ec66c43000a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-images',
                  apiId: '527016cb-1faf-4433-bd91-dbf502347095'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TomasBankauskas/sanity-gatsby-blog-images',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-images.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
