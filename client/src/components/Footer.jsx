import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram,  BsGithub, BsBehance, BsLinkedin } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-yellow-400'>
      <div className='w-full max-w-7xl mx-auto text-yellow-400'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
          <Link
              to='/'
              className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-yellow'>
            <span className='px-2 py-1 border-2 border-yellow-400 rounded-lg text-black'>
                Nexeus
              </span> <span className='text-yellow'>NEWS</span>
              
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 '>
            <div>
              <Footer.Title title='About' className='text-yellow-500'/>
              <Footer.LinkGroup col>
                <Footer.Link
                  href=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Trending
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Blogs
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' className='text-yellow-500' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://gist.github.com/VilharaMuramudali'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal'  className='text-yellow-500'/>
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className='border-yellow-500' />
        <div className='w-full sm:flex sm:items-center sm:justify-between text-yellow-500'>
              <Footer.Copyright
                href='#'
                by="nexuesnews"
                year={new Date().getFullYear()}
                className='text-yellow-500'
              />
              <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href='#' icon={BsFacebook} className='text-yellow-500' />
                <Footer.Icon href='#' icon={BsInstagram} className='text-yellow-500' />
                <Footer.Icon href='#' icon={BsLinkedin} className='text-yellow-500' />
                <Footer.Icon href='https://gist.github.com/VilharaMuramudali' icon={BsGithub} className='text-yellow-500' />
                <Footer.Icon href='#' icon={BsBehance} className='text-yellow-500' />
              </div>
            </div>
          </div>
    </Footer>
  );
}
