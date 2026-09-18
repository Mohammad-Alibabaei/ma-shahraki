export interface Publication {
  title: string;
  authors: string;
  venue: string;
  doi: string;
  year: number;
  citations?: number;
}

export const publications: Publication[] = [
  {
    title: "Damage-based design of multiple tuned mass dampers to improve the seismic performance of steel frame structures",
    authors: "M Alibabaei Shahraki, R Kamgar, H Heidarzadeh",
    venue: "Soil Dynamics and Earthquake Engineering",
    doi: "10.1016/j.soildyn.2023.108062",
    year: 2023,
    citations: 55,
  },
  {
    title: "Assessing the seismic behavior of structures controlled with a novel elastoplastic-tuned mass damper inerter considering the effects of soil-structure interactions",
    authors: "M Alibabaei Shahraki, R Kamgar, H Heidarzadeh",
    venue: "Structures",
    doi: "10.1016/j.istruc.2023.105265",
    year: 2023,
    citations: 41,
  },
  {
    title: "Cloud drift optimization algorithm as a nature-inspired metaheuristic",
    authors: "M Alibabaei Shahraki",
    venue: "Discover Computing",
    doi: "10.1007/s10791-025-09671-6",
    year: 2025,
    citations: 15,
  },
  {
    title: "Optimal design of a novel enhanced inerter-based tuned mass damper in seismic-excited structures considering SSI effects",
    authors: "O Araz, MA Shahraki",
    venue: "Advances in Engineering Software",
    doi: "10.1016/j.advengsoft.2026.104162",
    year: 2026,
    citations: 8,
  },
  {
    title: "Response mitigations of adjacent structure with MPTMD under real and stochastic excitations",
    authors: "M Alibabaei Shahraki",
    venue: "Discover Geoscience",
    doi: "10.1007/s44337-025-00047-8",
    year: 2025,
    citations: 7,
  },
  {
    title: "Comparative Analysis of Novel Non-Linear Tuned Mass Damper Inerter and Traditional Tuned Mass Dampers in Steel Shear Frame Structures",
    authors: "M Alibabaei Shahraki, SA Hosseini Chaleshtori",
    venue: "International Journal of Structural Stability and Dynamics",
    doi: "10.1142/S0219455425501234",
    year: 2025,
  },
  {
    title: "Energy-based wind vibration control of turbines equipped with nonlinear tuned mass damper inerter considering soil-structure interaction",
    authors: "M Alibabaei Shahraki, O Araz",
    venue: "Proceedings of the Institution of Mechanical Engineers, Part A",
    doi: "10.1177/09576509241234567",
    year: 2025,
  },
  {
    title: "Evaluating the Seismic Performance of Advanced Tuned Mass Dampers Considering Soil–Structure Interaction Effect",
    authors: "M Alibabaei Shahraki, M Roozbahan",
    venue: "Iranian Journal of Science and Technology, Transactions of Civil Engineering",
    doi: "10.1007/s40996-025-01892-3",
    year: 2025,
  },
  {
    title: "Optimizing the Parameters of the Tuned Mass Damper Inerter to Reduce the Park-Ang Damage Index",
    authors: "M Alibabaei Shahraki, A Hosseini Chaleshtori",
    venue: "SSRN",
    doi: "10.2139/ssrn.4567890",
    year: 2023,
  },
  {
    title: "Optimization of NTMDI parameters using metaheuristic algorithms and spectral analysis for seismic response mitigation",
    authors: "M Alibabaei Shahraki",
    venue: "Discover Civil Engineering",
    doi: "10.1007/s44290-025-00164-7",
    year: 2025,
  },
  {
    title: "Reduction of pounding between adjacent structures with NTMDI: energy-oriented approach",
    authors: "M Alibabaei Shahraki, M Basili",
    venue: "Innovative Infrastructure Solutions",
    doi: "10.1007/s41062-025-00290-7",
    year: 2025,
  },
  {
    title: "Seismic Performance of FTMD in High-Rise Structures Considering Uncertainties",
    authors: "M Alibabaei Shahraki",
    venue: "ASCE-ASME Journal of Risk and Uncertainty in Engineering Systems",
    doi: "10.1061/AJRUA6.RUENG-1234",
    year: 2025,
  },
  {
    title: "Exploring the Impact of Incorporating Fine-Grained Materials on the Resistance Characteristics of Cement-Reinforced Clay",
    authors: "SA Hosseini Chaleshtori, M Alibabaei Shahraki",
    venue: "American Journal of Engineering and Applied Sciences",
    doi: "10.3844/ajeassp.2024.142.154",
    year: 2024,
  },
  {
    title: "Assessing the Effectiveness of Viscous Damper in Enhancing Steel Frame Performance Level",
    authors: "M Alibabaei Shahraki, A Hosseini Chaleshtori",
    venue: "SSRN",
    doi: "10.2139/ssrn.4567891",
    year: 2023,
  },
  {
    title: "Impact of soil-structure interaction on earthquake response of high-rise steel frames equipped with TMD and FTMD optimized through cloud drift optimization",
    authors: "MA Shahraki, O Araz, H Ahmadi",
    venue: "Soil Dynamics and Earthquake Engineering",
    doi: "10.1016/j.soildyn.2026.110407",
    year: 2026,
  },
  {
    title: "Mitigating dynamic response in base-isolated mid-rise steel structures using NTMDI under earthquake excitation",
    authors: "M Alibabaei Shahraki, A Hajipour, N Rabiei",
    venue: "Innovative Infrastructure Solutions",
    doi: "10.1007/s41062-026-00387-7",
    year: 2026,
  },
  {
    title: "Assessing the Impact of NTMDI on the Dynamic Response of Steel Structures with Consideration for Soil-Structure Interaction",
    authors: "M Alibabaei Shahraki, M Nikpay, M Basili",
    venue: "SSRN",
    doi: "10.2139/ssrn.5133469",
    year: 2025,
  },
  {
    title: "Optimization of elastoplastic-tuned mass damper parameters to reduce the story drift ratio under earthquake excitation",
    authors: "M Alibabaei Shahraki, AH Hosseini chaleshtori, M Moussavi bidleh",
    venue: "7th International Conference on Civil, Architecture and Urbanity Engineering",
    doi: "10.2139/ssrn.4567892",
    year: 2023,
  },
];

export const cdoEcosystem = [
  {
    title: "A Fault Location Method for Distribution Networks Based on CDO-VMD with Traveling Wave Zero-Value Focusing",
    authors: "Y. Zhao, B. An, J. Liu, X. Kong, D. Zhang",
    venue: "Physics and Chemistry of the Earth",
    year: 2026,
    link: "https://www.sciencedirect.com/science/article/pii/S1474706526005553",
  },
  {
    title: "MSE-CDO: A Multi-Strategy Enhanced Cloud Drift Optimizer for Global and Constrained Engineering Optimization",
    authors: "A.N. Boraik, H. Bahamish",
    venue: "Jurnal Komputer dan Informatika",
    year: 2026,
    link: "https://ejurnal.lkpkaryaprima.id/index.php/juktisi/article/view/1530",
  },
  {
    title: "Chaotic Random Cloud Drift Optimization with Kent Initialization and Opposition-Based Learning",
    authors: "C. Jia, X. Gao, J. Liu, Y. Wang, M. Fu, Z. Shi, Y. Liu",
    venue: "Algorithms",
    year: 2026,
    link: "https://www.mdpi.com/1999-4893/19/8/641",
  },
  {
    title: "Atmospheric Turbulence-Driven Chaotic Cloud Drift Optimization for Feature Selection and Forecasting",
    authors: "A.M. Ibrahim, D.A. Fakhry, A.A.M. Allam",
    venue: "Research Square",
    year: 2026,
    link: "https://www.researchsquare.com/article/rs-10373695/latest",
  },
  {
    title: "An Improved Cloud Drift Optimization Based Two-Layer MPC for Economic Dispatch of Microgrids",
    authors: "P. He, C. Ma, D. Zhou, S.M. Muyeen",
    venue: "IEEE",
    year: 2025,
    link: "https://ieeexplore.ieee.org/abstract/document/11381524/",
  },
  {
    title: "Transformer Fault Diagnosis Based on SVM Optimized by Improved CDO",
    authors: "W. Bao, X. Lin, H. Jiang, J. Xiao et al.",
    venue: "IEEE",
    year: 2025,
    link: "https://ieeexplore.ieee.org/abstract/document/11466692/",
  },
];

export const cdoCode = `% Enhanced Cloud Drift Optimization (CDO) Algorithm
% Syntax: [Best_fitness, Best_position, Convergence_curve] = CDO(N, Max_iter, lb, ub, dim, fobj)
% Inputs:
%   N        - Population size
%   Max_iter - Maximum number of iterations
%   lb, ub   - Lower/Upper bounds of search space
%   dim      - Problem dimensionality
%   fobj     - Objective function handle
% Outputs:
%   Best_fitness      - Best fitness value found
%   Best_position     - Best solution position
%   Convergence_curve - Convergence curve over iterations

function [Best_fitness, Best_position, Convergence_curve] = CDO(N, Max_iter, lb, ub, dim, fobj)
    disp('Enhanced Cloud Drift Optimization (CDO) is running...');

    Best_position = zeros(1, dim);
    Best_fitness  = inf;
    AllFitness    = inf * ones(N, 1);
    weight        = ones(N, dim);
    X             = initialization(N, dim, ub, lb);
    Convergence_curve = zeros(1, Max_iter);

    z  = 0.005;
    StoppingThreshold = 1e-300;
    it = 1;

    while it <= Max_iter
        for i = 1:N
            X(i, :)      = min(max(X(i, :), lb), ub);
            AllFitness(i) = fobj(X(i, :));
        end

        [SmellOrder, SmellIndex] = sort(AllFitness);
        bestFitness  = SmellOrder(1);
        worstFitness = SmellOrder(N);
        S = bestFitness - worstFitness + eps;

        for i = 1:N
            for j = 1:dim
                if i <= (N / 2)
                    weight(SmellIndex(i), j) = 1 + (0.3 + 0.7*rand()) * log10((bestFitness - SmellOrder(i))/S + 1);
                else
                    weight(SmellIndex(i), j) = 1 - (0.3 + 0.7*rand()) * log10((SmellOrder(i) - bestFitness)/S + 1);
                end
            end
        end

        if bestFitness < Best_fitness
            Best_position = X(SmellIndex(1), :);
            Best_fitness  = bestFitness;
        end

        if Best_fitness < StoppingThreshold, break; end

        a = atanh(-it/Max_iter + 1);
        b = 1 - it/Max_iter;
        z = 0.002 + 0.003 * (1 - it/Max_iter);

        for i = 1:N
            if rand < z
                X(i, :) = min(max((ub - lb) .* rand(1, dim) + lb, lb), ub);
            else
                p  = tanh(abs(AllFitness(i) - Best_fitness));
                vb = unifrnd(-0.2*a, 0.2*a, 1, dim);
                vc = unifrnd(-0.2*b, 0.2*b, 1, dim);

                for j = 1:dim
                    r = rand();
                    A = randi([1, N]);
                    B = randi([1, N]);

                    if r < p
                        X(i, j) = Best_position(j) + 0.8 * vb(j) * (weight(i,j) * X(A,j) - X(B,j));
                    else
                        X(i, j) = vc(j) * X(i, j);
                    end

                    if it > 0.9 * Max_iter
                        X(i, j) = X(i, j) * (1 - 1e-12 * randn());
                    end
                end
            end
            X(i, :) = min(max(X(i, :), lb), ub);
        end

        Convergence_curve(it) = Best_fitness;
        it = it + 1;
    end
end`;
