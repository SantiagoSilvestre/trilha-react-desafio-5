import { supabase } from '../services/supabaseClient'

export const getPosts = async () => {
    const { data } = await api.get('/posts');

    if (data) {
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    const { data: post, error } = await supabase.from('post')
        .select('*')
        .eq('id', id)

    if (error) {
        console.error(error)
        return {}
    }
    return post[0]
}