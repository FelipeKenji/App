import { ScrollView, Text, TouchableOpacity, View , Image} from "react-native";
import { categories } from "../../constantes";
import { useState } from "react";
import { featured } from "../../constantes";
import { themeColors } from "../../index";
import { StyleSheet } from "react-native";
import { Bold } from "react-native-feather";
import OptionCard from "./optionCard";


export default function FeaturedRow ({title,options, description}) {
    return (
        <View>
            <View style={styles.container} className="flex-row justify-between items-center px-4">
                <View>
                    <Text style={styles.titulo} className="font-bold text-lg">{title}</Text>
                    <Text style= {styles.desc} className='text-gray-500 text-xs'>{description}</Text>
                    
                </View>
                <TouchableOpacity>
                    <Text style={{color: themeColors.text}} className="font-semibold">Veja Mais</Text>
                </TouchableOpacity>
            </View>
            
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-3"
        >
        
        {
           options.map((option, index)=>{
            return(
                <OptionCard
                item={option}
                key={index}/>
            )
           })
            
        } 
          
        </ScrollView>
        </View>
    );
}
const styles =StyleSheet.create({
    
    titulo: {
        fontSize: 25,
        fontWeight: 'bold'
       
    },
    desc:{
       

    },
})
