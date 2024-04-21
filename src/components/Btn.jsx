import React from 'react'
import useTheme from '../contexts/theme'

const Btn = () => {

    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e)=> {
        const darkModeStatus  = e.currentTarget.checked
        if(darkModeStatus){
            darkTheme()
        }else{
            lightTheme()
        }
    }
  return (
    <div className='flex w-auto h-auto m-auto text-center mt-20 gap-2'>
        <input 
        type="checkbox" 
        value= ""
        onChange={onChangeBtn}
        checked = {themeMode === 'dark'}
        />
        <h3>Toggle</h3>
    </div>
  )
}

export default Btn
