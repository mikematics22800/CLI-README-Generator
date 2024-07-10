// Declare and export array containing license information
const licenses = [
  {
    name: 'Academic Free License v3.0 (AFL-3.0)', 
    badge: 'https://img.shields.io/badge/License-Academic_Free_License_v3.0-blue.svg',
    url: 'https://opensource.org/licenses/AFL-3.0'
  },
  {
    name: 'Apache license 2.0 (Apache-2.0)',
    badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    url: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
    name: 'Artistic license 2.0 (Artistic-2.0)',
    badge: 'https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg',
    url: 'https://opensource.org/licenses/Artistic-2.0'
  },
  {
    name: 'Boost Software License 1.0 (BSL-1.0)',
    badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    url: 'https://www.boost.org/LICENSE_1_0.txt'
  },
  {
    name: 'BSD 2-clause "Simplified" license (BSD-2-Clause)',
    badge: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
    url: 'https://opensource.org/licenses/BSD-2-Clause'
  },
  {
    name: 'BSD 3-clause "New" or "Revised" license (BSD-3-Clause)',
    badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    url: 'https://opensource.org/licenses/BSD-3-Clause'
  },
  {
    name: 'BSD 3-clause Clear license (BSD-3-Clause-Clear)',
    badge: 'https://img.shields.io/badge/License-BSD_3--Clause_Clear-blue.svg',
    url: 'https://opensource.org/licenses/BSD-3-Clause-Clear'
  },
  {
    name: 'BSD 4-clause "Original" or "Old" license (BSD-4-Clause)',
    badge: 'https://img.shields.io/badge/License-BSD_4--Clause-orange.svg',
    url: 'https://opensource.org/licenses/BSD-4-Clause'
  },
  {
    name: 'BSD Zero-Clause license (0BSD)',
    badge: 'https://img.shields.io/badge/License-0BSD-blue.svg',
    url: 'https://opensource.org/licenses/0BSD'
  },
  {
    name: 'Creative Commons license family (CC)',
    badge: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
    url: 'http://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    name: 'Creative Commons Zero v1.0 Universal (CC0-1.0)',
    badge: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
    url: 'http://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    name: 'Creative Commons Attribution 4.0 (CC-BY-4.0)',
    badge: 'https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg',
    url: 'http://creativecommons.org/licenses/by/4.0/'
  },
  {
    name: 'Creative Commons Attribution ShareAlike 4.0 (CC-BY-SA-4.0)',
    badge: 'https://img.shields.io/badge/License-CC_BY_SA_4.0-lightgrey.svg',
    url: 'http://creativecommons.org/licenses/by-sa/4.0/'
  },
  {
    name: 'Do What The F*ck You Want To Public License (WTFPL)',
    badge: 'https://img.shields.io/badge/License-WTFPL-brightgreen.svg',
    url: 'http://www.wtfpl.net/'
  },
  {
    name: 'Educational Community License v2.0 (ECL-2.0)',
    badge: 'https://img.shields.io/badge/License-Educational_Community_License_v2.0-blue.svg',
    url: 'https://opensource.org/licenses/ECL-2.0'
  },
  {
    name: 'Eclipse Public License 1.0 (EPL-1.0)',
    badge: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
    url: 'https://opensource.org/licenses/EPL-1.0'
  },
  {
    name: 'Eclipse Public License 2.0 (EPL-2.0)',
    badge: 'https://img.shields.io/badge/License-EPL_2.0-red.svg',
    url: 'https://opensource.org/licenses/EPL-2.0'
  },
  {
    name: 'European Union Public License 1.1 (EUPL-1.1)',
    badge: 'https://img.shields.io/badge/License-EUPL_1.1-blue.svg',
    url: 'https://opensource.org/licenses/EUPL-1.1'
  },
  {
    name: 'GNU Affero General Public License v3.0 (AGPL-3.0)',
    badge: 'https://img.shields.io/badge/License-AGPL_3.0-red.svg',
    url: 'https://opensource.org/licenses/AGPL-3.0'
  },
  {
    name: 'GNU General Public License family (GPL)',
    badge: 'https://img.shields.io/badge/License-GPL-blue.svg',
    url: 'https://opensource.org/licenses/GPL-3.0'
  },
  {
    name: 'GNU General Public License v2.0 (GPL-2.0)',
    badge: 'https://img.shields.io/badge/License-GPL_2.0-blue.svg',
    url: 'https://opensource.org/licenses/GPL-2.0'
  },
  {
    name: 'GNU General Public License v3.0 (GPL-3.0)',
    badge: 'https://img.shields.io/badge/License-GPL_3.0-blue.svg',
    url: 'https://opensource.org/licenses/GPL-3.0'
  },
  {
    name: 'GNU Lesser General Public License family (LGPL)',
    badge: 'https://img.shields.io/badge/License-LGPL-blue.svg',
    url: 'https://opensource.org/licenses/LGPL-3.0'
  },
  {
    name: 'GNU Lesser General Public License v2.1 (LGPL-2.1)',
    badge: 'https://img.shields.io/badge/License-LGPL_2.1-blue.svg',
    url: 'https://opensource.org/licenses/LGPL-2.1'
  },
  {
    name: 'GNU Lesser General Public License v3.0 (LGPL-3.0)',
    badge: 'https://img.shields.io/badge/License-LGPL_3.0-blue.svg',
    url: 'https://opensource.org/licenses/LGPL-3.0'
  },
  {
    name: 'ISC (ISC)',
    badge: 'https://img.shields.io/badge/License-ISC-blue.svg',
    url: 'https://opensource.org/licenses/ISC'
  },
  {
    name: 'LaTeX Project Public License v1.3c (LPPL-1.3c)',
    badge: 'https://img.shields.io/badge/License-LPPL_1.3c-blue.svg',
    url: 'https://opensource.org/licenses/LPPL-1.3c'
  },
  {
    name: 'Microsoft Public License (MS-PL)',
    badge: 'https://img.shields.io/badge/License-MS_PL-blue.svg',
    url: 'https://opensource.org/licenses/MS-PL'
  },
  {
    name: 'MIT (MIT)',
    badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    url: 'https://opensource.org/licenses/MIT'
  },
  {
    name: 'Mozilla Public License 2.0 (MPL-2.0)',
    badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    url: 'https://opensource.org/licenses/MPL-2.0'
  },
  {
    name: 'Open Software License 3.0 (OSL-3.0)',
    badge: 'https://img.shields.io/badge/License-OSL_3.0-blue.svg',
    url: 'https://opensource.org/licenses/OSL-3.0'
  },
  {
    name: 'PostgreSQL License (PostgreSQL)',
    badge: 'https://img.shields.io/badge/License-PostgreSQL-blue.svg',
    url: 'https://opensource.org/licenses/PostgreSQL'
  },
  {
    name: 'SIL Open Font License 1.1 (OFL-1.1)',
    badge: 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg',
    url: 'https://opensource.org/licenses/OFL-1.1'
  },
  {
    name: 'University of Illinois/NCSA Open Source License (NCSA)',
    badge: 'https://img.shields.io/badge/License-NCSA-blue.svg',
    url: 'https://opensource.org/licenses/NCSA'
  },
  {
    name: 'The Unlicense (Unlicense)',
    badge: 'https://img.shields.io/badge/License-Unlicense-blue.svg',
    url: 'http://unlicense.org/'
  },
  {
    name: 'zLib License (Zlib)',
    badge: 'https://img.shields.io/badge/License-Zlib-lightgrey.svg',
    url: 'https://opensource.org/licenses/Zlib'
  }
]

export default licenses