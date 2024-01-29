import supabase, { supabaseUrl } from './supabase';

export async function createProductKey(data) {
  console.log(data);
  const imageName = `${Math.random()}-${data.thumbnail.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/product-thumbnail/${imageName}`;

  const { error } = await supabase
    .from('productsKey')
    .insert([{ ...data, thumbnail: imagePath }])
    .select();

  if (error) throw new Error('Could not create product!');

  const { error: uploadError } = await supabase.storage
    .from('product-thumbnail')
    .upload(imageName, data.thumbnail);

  if (uploadError) {
    console.log('can not upload');
    throw new Error('could not upload picture');
  }
}
