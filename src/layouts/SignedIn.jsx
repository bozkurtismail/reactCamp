import React from 'react'
import { Dropdown, Menu ,Image} from 'semantic-ui-react'

export default function SignedIn(props) {//props kullanımı yerinde destructing işlemide yapılabilirdi {signOut} şeklinde yazılıp props.signOut kullanmak
  return (                              //yerine {singOut} şeklinde çağrılabilinir.Örneğini singOut ta kullandık
    <div>
      <Menu.Item>
          <Image avatar spaced = "https://www.pngall.com/profile-png/download/51576 "/>
          <Dropdown pointing="top right" text='İsmail'>
              <Dropdown.Menu>
                  <Dropdown.Item text="Bilgilerim" icon="info"/>
                  <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
              </Dropdown.Menu>
          </Dropdown>
      </Menu.Item>
    </div>
  )
}
