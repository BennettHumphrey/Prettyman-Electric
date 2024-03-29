export const createNavOptions = (arr) => {

    //Creates the subPages section, with a title and an href
    const subPages = arr.map((data) => ({title: data.pageTitle, href: `../subPage/${data.pageTitle}`}))

    // console.log(`subPages: ${subPages}`)

    //Bookmarks the subPages with home and contact
    const navOptionsArray = [
      {
        href: '/',
        title: 'Home',
      },
      ...subPages,
      {
        href: '../contact',
        title: 'Contact Us',
      },
    ]

    // console.log(`navOptions: ${JSON.stringify(navOptionsArray)}`)
    return navOptionsArray
  } 