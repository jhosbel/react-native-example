import { View, Text } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View className='bg-[#282F62] h-full gap-[27px] justify-center'>
      <View className='bg-[#343B71] h-[227px] w-full rounded-[5px] shadow-2xl'>
        <View className='flex-row self-center items-center justify-between py-4 w-[340px]'>
          <View className='w-[45px] h-[45px] rounded-full bg-black'></View>
          <Text className='text-white'>Editar mi foto de perfil</Text>
        </View>
        <View className='self-center p-4 border-t-[1px] border-[#ffffff] w-[340px]'>
          <Text className='text-[#7177AB] text-[10px]'>Nombre</Text>
          <Text className='text-white text-[20px]'>Mario</Text>
        </View>
        <View className='self-center p-4 border-t-[1px] border-[#ffffff] w-[340px]'>
          <Text className='text-[#7177AB] text-[10px]'>Apellido</Text>
          <Text className='text-white text-[20px]'>Reyes</Text>
        </View>
      </View>
      <View className='bg-[#343B71] h-[404px] w-full rounded-[5px] shadow-2xl'>

      </View>
    </View>
  )
}

export default Profile