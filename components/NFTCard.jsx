import { View, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectangleButton } from './Button';
import { SubInfo, EthPrice, NFTTitle } from './SubInfo';

const NFTCard = ({ data }) => {
    const navigation = useNavigation();
    const navigateToNewScreen = () => {
        setTimeout(() => {
            navigation.navigate('Details', { data }); // Navigate to the new screen after a delay
        }, 200); // Adjust the delay (in milliseconds) as needed
    };
    return (
        <TouchableHighlight onPress={() => navigateToNewScreen()}>
            <View
                style={{
                    backgroundColor: COLORS.white,
                    borderRadius: SIZES.font,
                    marginBottom: SIZES.extraLarge,
                    margin: SIZES.base,
                    ...SHADOWS.dark,
                }}
            >
                <View style={{ width: '100%', height: 250 }}>
                    <Image
                        source={data.image}
                        resizeMode='cover'
                        style={{
                            width: '100%',
                            height: '100%',
                            borderTopLeftRadius: SIZES.font,
                            borderTopRightRadius: SIZES.font,
                            borderBottomLeftRadius: SIZES.font,
                            borderBottomRightRadius: SIZES.font,
                        }}
                    />

                    <CircleButton imgUrl={assets.heart} right={10} top={10} />
                </View>

                <SubInfo />
                <View style={{ width: '100%', padding: SIZES.font }}>
                    <NFTTitle
                        title={data.name}
                        titleSz={SIZES.large}
                        subTitle={data.creator}
                        subTitleSz={SIZES.small}
                    />

                    <View
                        style={{
                            marginTop: SIZES.font,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <EthPrice price={data.price} />
                        <RectangleButton
                            minWidth={120}
                            fontSize={SIZES.font}
                            handlePress={() => navigateToNewScreen()}
                        />
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default NFTCard;
