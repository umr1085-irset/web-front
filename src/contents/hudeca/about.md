#  About the viewer 


............

This beta version of the Uro-oncogenomics Viewer (UncoVer) allows scientists to explore single-cell and spatial transcriptomics datasets in the field of urologic cancers. The datasets have been homogeneously  collected and pre-processed to ensure reproducibility. Users can visualize expression data and use multiple criteria to filter, query and gain insight into single-cell and spatial omics data. 

### Browse and analyse

The viewer has been designed to achieve two main goals:
- Search, filter and display information about studies and datasets related to Uro-Oncology. When entering the application , users are invited to browse a list of studies presented in a data grid that can be filtered and sorted according to a common set of criteria.
- Explore, analyze and compare cell types according to different parameters, and visualize features.  The exploration interface consists of four main panels that will allow the user to i) filter the information; ii)  display the distribution of cells according to their metadata; iii) display scatter plots in which cells are distributed according to the dimensionality reduction method(s) (UMAP, t-SNE...) and color-coded according to different features including gene expression.



### Data storage

Data are stored according to two different modalities:
- Studies and their associated datasets are manually associated with a set of information (including technology, cancer type, biomaterial type, organ of origin …) to allow users to search and filter the database based on this information.
- Each dataset consists of a LOOM file that stores the corresponding omics data and the associated metadata. The LOOM format is based on the HDF5 format, a standard for storing large numerical datasets.



### Submitting data to UncoVer

Please contact us if you would like to submit your datasets to UncoVer. [contact us](mailto:frederic.chalmel@inserm.fr) 


