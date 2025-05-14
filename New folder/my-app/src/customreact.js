function customRender(reactElement,container) {
   /* const domELement =document.createElement(reactElement.type)
    domELement.innerHTML=reactElement.children
    domELement.setAttribute('href',reactElement.props.href)
    domELement.setAttribute('target',reactElement.props.target)
    container.appendChild(domELement)*/

   const domElement= document.createElement(reactElement.type)       
    domElement.innerHTML= reactElement.children
    for (const prop in reactElement.props) {
       if(prop==children)continue ;
       domElement.setAttribute(prop,reactElement.props
        [prop])

    }
       
        container.appendCHild(domElement)
      
}

const reactElement = {
 type:'a',
 props: {
    href: 'https://goggle.com',
    target:'_blank'
 } ,
 children :'CLick me to visit google' 
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)