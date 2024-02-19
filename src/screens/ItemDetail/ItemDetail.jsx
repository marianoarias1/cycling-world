import { View, Text, Image, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/products.json'
import { styles } from './itemDetailStyles';

export const ItemDetail = ({ navigation, route }) => {
    const [product, setProduct] = useState(null)
    const [image, setImage] = useState('')
    const { id } = route.params

    useEffect(() => {
        const findProduct = allProducts.find((prod) => prod.id === id);
        setProduct(findProduct);
    }, [id]);

    return (
        <View style={styles.container}>
            {product ? (
                <View style={styles.productContainer}>
                    <View style={styles.imageContainer}>
                        <View style={styles.card}>
                            <Image
                                source={
                                    image ? { uri: image }
                                    :
                                    { uri: product.image[0] }
                                }
                                style={styles.image}
                            />
                            <FlatList
                                horizontal={true}
                                data={product.image}
                                renderItem={({ item }) => (
                                    <Pressable onPress={() => { setImage(item) }}>
                                        <View style={styles.imageGalleryContainer}>
                                            <Image
                                                source={{ uri: item }}
                                                style={{ width: 40, height: 40 }}
                                            />
                                        </View>
                                    </Pressable>
                                )}
                                keyExtractor={(item) => product.id + Math.random(36)}
                            />
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{product.title}</Text>
                        <Text style={styles.desc}>{product.description}</Text>
                        <Text style={styles.price}>${product.price}</Text>
                        <Pressable
                            style={styles.button}
                        >
                            <Text
                                style={styles.buyNow}
                            >Buy now</Text>
                        </Pressable>
                    </View>
                </View>
            ) : (
                <View>
                    <Text>Cargando...</Text>
                </View>
            )}
        </View>
    );
};

