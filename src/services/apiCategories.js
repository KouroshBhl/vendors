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
  let { data: subCategories1, error } = await supabase
    .from('subCategories1')
    .select(`*, categories (*)`)
    .eq('rootCategory', id);

  if (error) throw new Error('Could not get sub-categories');

  return subCategories1;
}

export async function getSubSubCategories(id) {
  console.log(id);
  let { data: subCategories2, error } = await supabase
    .from('subCategories2')
    .select(`*, subCategories1 (*)`)
    .eq('subCategory1', id);

  if (error) throw new Error('Could not get sub-categories');

  return subCategories2;
}

export async function deleteCategory(id) {
  const { error } = await supabase.from('categories').delete().eq('id', id);

  if (error) throw new Error('Could not delete category');
}

export async function createCategory(data) {
  const { error } = await supabase
    .from('categories')
    .insert([{ ...data }])
    .select();

  if (error) throw new Error('Could not create category');
}

export async function createSubCategory(data) {
  const { error } = await supabase
    .from('subCategories1')
    .insert([{ ...data }])
    .select();

  if (error) throw new Error('Could not create sub-category');
}

export async function createSubSubCategory(data) {
  const { error } = await supabase
    .from('subCategories2')
    .insert([{ ...data }])
    .select();

  if (error) throw new Error('Could not create sub-category');
}
