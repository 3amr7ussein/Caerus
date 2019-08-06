// import moment from 'moment'
// import RNFS from 'react-native-fs'

// export const getFileName = (fullPath) => fullPath.substring(fullPath.lastIndexOf('/') + 1)
// export const hashFileName = (fileName) => ((moment().valueOf() + '' + fileName).replace(/[^a-z0-9]/gi, '').toLowerCase() + '.' + fileName.substring(fileName.lastIndexOf('.') + 1))

// export const fileExists = (fileRef) => RNFS.exists(getLocalFile(fileRef))
// export const getLocalFile = (fileRef) => `${RNFS.DocumentDirectoryPath}/${fileRef}`

// export const downloadFileToLocal = (fileUrl, imageUri) => RNFS.downloadFile({
//   fromUrl: fileUrl,
//   toFile: imageUri
// }).promise
