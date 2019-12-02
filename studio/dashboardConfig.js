export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5de5a180028781d3dc4a6611',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2tfj7kgn',
                  apiId: '92d9a635-91ff-4eaa-b6d1-58ea71c87d5e'
                },
                {
                  buildHookId: '5de5a1815bbf8ad8051ef01d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-p5k1zi34',
                  apiId: 'e5535650-3f00-4d39-85df-2a26b980d73e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/caki0915/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-p5k1zi34.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
