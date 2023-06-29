<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EvictionReportController extends AbstractController
{
    #[Route('/eviction-report', name: 'app_eviction_report')]
    public function index(): Response
    {

        $params = [
            'hero' => [
                'title' => 'Tenant Eviction History',
                'subtitle' => 'Get direct matches for your applicants instantly using our national eviction history records.',
                'body' => 'Search over <strong>35 million</strong> records compiled from <strong>50 states</strong>. See the information you need that is usually not found on credit reports',
                'image' => 'images/map.jpg',
            ],
            'eviction' => [],
            'criminal' => [],
            'pricing' => [],
        ];

        return $this->render('eviction_report/index.html.twig', $params);
    }
}
