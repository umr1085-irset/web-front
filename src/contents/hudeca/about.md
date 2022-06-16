#  About the viewer 


............

Uncover (Uro-oNCology ViewER)  will enable you to browse studies related to human development and to explore transcriptomics data in an interactive way. Datasets from published articles have been gathered and preprocessed so you can actually visualize expression data and use multiple criteria to filter, compare and gain insight into single-cell data. 

### Browse and analyse

The viewer was designed to achieve two main goals:
- searching, filtering and viewing information about studies and datasets related to Uro-Oncology : when entering the application, end-users are invited to browse a list of studies presented in a data grid that can be filtered and sorted according to a common set of criteria
- Exploring, analyzing and comparing cell types according to different parameters and visualization modes : the exploration interface is constituted of four main panels that will let you filter the information, view the repartition of cells according to cell metadata, analyze cell proximity according to the dimensionality reduction method used for the analysis (UMAP, t-sne...) or analyze gene expression 


### Data storage
Data are stored according to two different modalities:
- Studies are manually curated and annotated according to a set of pre-defined metadata, so as to enable end-users search and filter the database via a common coherent set of parameters/values
- Each analysis file also integrates its own set of metadata. Files are stored in the LOOM file format, which is based on HDF5, a standard for storing large numerical datasets.

