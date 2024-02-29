import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({ item,selectedJob, handlecardPress}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={()=>handlecardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
        <Image 
          source={{ uri: item.employer_logo}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default PopularJobCard