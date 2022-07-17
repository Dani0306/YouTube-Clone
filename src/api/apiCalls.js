import axios from 'axios'
const apikey = process.env.REACT_APP_API_KEY;


export const search = async (query) => {

    const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${query}&key=${apikey}`);
    
    if(data){
        const { items } = data;
        return items.filter(item => item.id.kind !== 'searchResult').map( async item => {
            const { id: { kind } } = item;
            if(kind.includes('channel')) {
                const { id: { channelId } } = item;
                const channel = await getChannel(channelId);
                return channel
            } else if(kind.includes('video')){
                const { id: { videoId } } = item;
                const video = await getVideo(videoId);
                return video
            } else return item
        })
    
    }

    return data;
    
}


export const getTrendingdingVideos = async () => {
    const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=CO&key=${apikey}`);
    if(data){
        const { items } = data;
        return items
    }
}

export const getRelatedVideos = async (topics = [], maxResults) => {
    let results = [];

    for(let i = 0; i < topics.length; i++){
        const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=${maxResults}&q=${topics[i]}&key=${apikey}`)
        if(data){
            const { items } = data;
            const customArr = items.filter(item => item.id.kind.includes('video')).map(async item => {
                const { id: { videoId } } = item;
                const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apikey}`)
                return data;
            })
            results = results.concat(customArr)
        }
    }

    return results

}

export const getChannel = async (id) => {
    const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${id}&key=${apikey}`)
    if(data){
        const { items } = data;
        return items[0];
    }
}

export const getVideo = async (id) => {
    const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${apikey}`)
    if(data){
        const { items } = data;
        return items[0];
    }
}
