import supabase from './supabase';

export async function getRootCategories() {
  const { data, error } = await supabase.from('categories').select('*');

  if (error) {
    console.error(error);
    throw new Error('Categories could not be loaded');
  }

  return data;
}

export async function getSubCategories(id) {
  console.log(id);
  let { data: subCategories1, error } = await supabase
    .from('subCategories1')
    .select(`*, categories (*)`)
    .eq('rootCategory', id);

  if (error) throw new Error('Could not get sub-categories');

  return subCategories1;
}

export async function deleteCategory(id) {
  const { error } = await supabase.from('categories').delete().eq('id', id);

  if (error) throw new Error('Could not delete category');
}
