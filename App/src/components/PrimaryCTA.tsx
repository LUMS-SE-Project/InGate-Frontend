import { View, Text, TouchableOpacity } from 'react-native';
import {Button} from 'react-native-elements';

const PrimaryCTA = (props : any) => {

    // Destructure props
    const { title, description, ctaText, ctaLink } = props;
    
    return (
        <View className='justify-center mt-6 md:mt-8 m-w-1.1 w-80 text-sm primary px-4 py-2 text-white rounded-3xl font-medium'>
            <Button>


            </Button>
        </View>
    )

};


export default PrimaryCTA;